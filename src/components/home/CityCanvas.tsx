'use client';

import { useEffect, useRef } from 'react';

export default function CityCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];
        const particleCount = 150;
        let mouse = { x: null as number | null, y: null as number | null, radius: 200 };

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const onMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('resize', resizeCanvas);
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseleave', onMouseLeave);

        class Particle {
            x!: number;
            y!: number;
            size!: number;
            speedX!: number;
            speedY!: number;
            pulse!: number;
            color!: string;

            constructor() {
                this.init();
            }

            init() {
                this.x = Math.random() * canvas!.width;
                this.y = canvas!.height - (Math.random() * Math.random() * canvas!.height);
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.speedY = (Math.random() * -0.3) - 0.1;
                this.pulse = Math.random() * Math.PI * 2;
                const colors = ['#ffffff', '#3b82f6', '#8b5cf6'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.pulse += 0.05;

                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        this.x += dx * 0.005;
                        this.y += dy * 0.005;
                    }
                }

                if (this.y < -50) this.y = canvas!.height + 50;
                if (this.x < -50) this.x = canvas!.width + 50;
                if (this.x > canvas!.width + 50) this.x = -50;
            }

            draw() {
                ctx!.save();
                const opacity = 0.4 + Math.sin(this.pulse) * 0.3;
                ctx!.globalAlpha = opacity;
                ctx!.fillStyle = this.color;
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx!.fill();
                ctx!.restore();
            }
        }

        const initParticles = () => {
            resizeCanvas();
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        const opacity = (1 - distance / 100) * 0.2;
                        ctx!.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                        ctx!.lineWidth = 0.5;
                        ctx!.beginPath();
                        ctx!.moveTo(particles[i].x, particles[i].y);
                        ctx!.lineTo(particles[j].x, particles[j].y);
                        ctx!.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx!.fillStyle = '#0a0e17';
            ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

            const grad = ctx!.createLinearGradient(0, canvas!.height, 0, canvas!.height * 0.6);
            grad.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
            grad.addColorStop(1, 'rgba(10, 14, 23, 0)');
            ctx!.fillStyle = grad;
            ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

            drawConnections();

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', onMouseMove);
            canvas.removeEventListener('mouseleave', onMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 block" />;
}
