'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, children, ...props }: DottedSurfaceProps & { children?: React.ReactNode }) {
	const containerRef = useRef<HTMLDivElement>(null);
	const sceneRef = useRef<{
		scene: THREE.Scene;
		camera: THREE.PerspectiveCamera;
		renderer: THREE.WebGLRenderer;
		particles: THREE.Points[];
		animationId: number;
		count: number;
	} | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const SEPARATION = 150;
		const AMOUNTX = 40;
		const AMOUNTY = 60;

		const width = containerRef.current.clientWidth || window.innerWidth;
		const height = containerRef.current.clientHeight || 600;

		// Scene setup
		const scene = new THREE.Scene();
		scene.fog = new THREE.Fog(0xffffff, 2000, 10000);

		const camera = new THREE.PerspectiveCamera(
			60,
			width / height,
			1,
			10000,
		);
		camera.position.set(0, 355, 1220);

		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
		});
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(width, height);
		renderer.setClearColor(scene.fog.color, 0);

		// We need to inject the canvas into a separate child so we don't overwrite React children
		const canvasContainer = document.createElement('div');
		canvasContainer.style.position = 'absolute';
		canvasContainer.style.top = '0';
		canvasContainer.style.left = '0';
		canvasContainer.style.width = '100%';
		canvasContainer.style.height = '100%';
		canvasContainer.style.zIndex = '0';
		canvasContainer.style.pointerEvents = 'none';
		containerRef.current.appendChild(canvasContainer);
		canvasContainer.appendChild(renderer.domElement);

		// Create particles
		const particles: THREE.Points[] = [];
		const positions: number[] = [];
		const colors: number[] = [];

		// Create geometry for all particles
		const geometry = new THREE.BufferGeometry();

		for (let ix = 0; ix < AMOUNTX; ix++) {
			for (let iy = 0; iy < AMOUNTY; iy++) {
				const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
				const y = 0; // Will be animated
				const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

				positions.push(x, y, z);
				
				// Force purple colors
				colors.push(0.7, 0.55, 1.0);
			}
		}

		geometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(positions, 3),
		);
		geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

		// Create material
		const material = new THREE.PointsMaterial({
			size: 8,
			vertexColors: true,
			transparent: true,
			opacity: 0.8,
			sizeAttenuation: true,
		});

		// Create points object
		const points = new THREE.Points(geometry, material);
		scene.add(points);

		let count = 0;
		let animationId: number = 0;
		let isVisible = true;

		// Setup Intersection Observer to pause animation when off-screen
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]) {
					isVisible = entries[0].isIntersecting;
				}
			},
			{ threshold: 0 }
		);
		observer.observe(containerRef.current);

		// Animation function
		const animate = () => {
			animationId = requestAnimationFrame(animate);

			// Skip heavy math and rendering when off-screen to prevent stuttering
			if (!isVisible) return;

			const positionAttribute = geometry.attributes.position;
			const positions = positionAttribute.array as Float32Array;

			let i = 0;
			for (let ix = 0; ix < AMOUNTX; ix++) {
				for (let iy = 0; iy < AMOUNTY; iy++) {
					const index = i * 3;

					// Animate Y position with sine waves
					positions[index + 1] =
						Math.sin((ix + count) * 0.3) * 50 +
						Math.sin((iy + count) * 0.5) * 50;

					i++;
				}
			}

			positionAttribute.needsUpdate = true;

			renderer.render(scene, camera);
			count += 0.05; // Slightly slower animation for a premium feel
		};

		// Handle window resize
		const handleResize = () => {
			if (!containerRef.current) return;
			const newWidth = containerRef.current.clientWidth;
			const newHeight = containerRef.current.clientHeight || 600;
			camera.aspect = newWidth / newHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(newWidth, newHeight);
		};

		window.addEventListener('resize', handleResize);

		// Start animation
		animate();

		// Store references
		sceneRef.current = {
			scene,
			camera,
			renderer,
			particles: [points],
			animationId,
			count,
		};

		// Cleanup function
		return () => {
			window.removeEventListener('resize', handleResize);
			observer.disconnect(); // Clean up observer
			cancelAnimationFrame(animationId); // Use local variable which has the latest frame ID

			if (sceneRef.current) {
				sceneRef.current.scene.traverse((object) => {
					if (object instanceof THREE.Points) {
						object.geometry.dispose();
						if (Array.isArray(object.material)) {
							object.material.forEach((material) => material.dispose());
						} else {
							object.material.dispose();
						}
					}
				});

				sceneRef.current.renderer.dispose();
			}

			// Robustly remove the canvas container from the DOM
			if (canvasContainer && canvasContainer.parentNode) {
				canvasContainer.parentNode.removeChild(canvasContainer);
			}
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className={cn('relative w-full overflow-hidden', className)}
			{...props}
		>
			{children}
		</div>
	);
}
