'use client';

import { useEffect, useRef } from 'react';

const NODE_TYPES = ['SERVER', 'CLOUD', 'TERMINAL', 'DATABASE'];

export default function NetworkCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let nodes: any[] = [];
        const nodeCount = 40;
        let mouse = { x: null as number | null, y: null as number | null, radius: 250 };

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

        class Node {
            x!: number;
            y!: number;
            type!: string;
            size!: number;
            speedX!: number;
            speedY!: number;
            angle!: number;
            spin!: number;
            pulse!: number;

            constructor() {
                this.init();
            }

            init() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.type = NODE_TYPES[Math.floor(Math.random() * NODE_TYPES.length)];
                this.size = Math.random() * 15 + 10;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() * -0.6) - 0.2;
                this.angle = Math.random() * Math.PI * 2;
                this.spin = (Math.random() - 0.5) * 0.01;
                this.pulse = 0;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.angle += this.spin;
                this.pulse += 0.05;

                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        let force = (mouse.radius - distance) / mouse.radius;
                        this.x -= dx * force * 0.02;
                        this.y -= dy * force * 0.02;
                    }
                }

                if (this.y < -50) this.y = canvas!.height + 50;
                if (this.x < -50) this.x = canvas!.width + 50;
                if (this.x > canvas!.width + 50) this.x = -50;
            }

            draw() {
                ctx!.save();
                ctx!.translate(this.x, this.y);
                ctx!.rotate(this.angle);

                const opacity = 0.3 + Math.sin(this.pulse) * 0.2;
                ctx!.strokeStyle = `rgba(96, 165, 250, ${opacity})`;
                ctx!.lineWidth = 1.5;
                ctx!.shadowBlur = 10;
                ctx!.shadowColor = '#3b82f6';

                ctx!.beginPath();
                if (this.type === 'SERVER') {
                    ctx!.rect(-this.size / 2, -this.size / 2, this.size, this.size);
                    ctx!.moveTo(-this.size / 2, 0); ctx!.lineTo(this.size / 2, 0);
                } else if (this.type === 'CLOUD') {
                    ctx!.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                    ctx!.moveTo(-this.size / 4, -this.size / 4); ctx!.arc(-this.size / 4, -this.size / 4, 5, 0, Math.PI * 2);
                } else if (this.type === 'TERMINAL') {
                    ctx!.moveTo(-this.size / 2, -this.size / 3); ctx!.lineTo(this.size / 2, -this.size / 3);
                    ctx!.lineTo(this.size / 2, this.size / 2); ctx!.lineTo(-this.size / 2, this.size / 2); ctx!.closePath();
                    ctx!.moveTo(-this.size / 4, 0); ctx!.lineTo(0, 0);
                } else {
                    ctx!.ellipse(0, 0, this.size / 2, this.size / 3, 0, 0, Math.PI * 2);
                }
                ctx!.stroke();

                ctx!.fillStyle = '#60a5fa';
                ctx!.beginPath();
                ctx!.arc(0, 0, 2, 0, Math.PI * 2);
                ctx!.fill();

                ctx!.restore();
            }
        }

        const initNodes = () => {
            resizeCanvas();
            nodes = [];
            for (let i = 0; i < nodeCount; i++) {
                nodes.push(new Node());
            }
        };

        const drawConnections = () => {
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 200) {
                        const opacity = (1 - distance / 200) * 0.15;
                        ctx!.strokeStyle = `rgba(148, 163, 184, ${opacity})`;
                        ctx!.lineWidth = 1;
                        ctx!.beginPath();
                        ctx!.moveTo(nodes[i].x, nodes[i].y);
                        ctx!.lineTo(nodes[j].x, nodes[j].y);
                        ctx!.stroke();

                        if (Math.random() > 0.98) {
                            const time = (Date.now() % 2000) / 2000;
                            const px = nodes[i].x + (nodes[j].x - nodes[i].x) * time;
                            const py = nodes[i].y + (nodes[j].y - nodes[i].y) * time;
                            ctx!.fillStyle = '#f8fafc';
                            ctx!.beginPath();
                            ctx!.arc(px, py, 1.5, 0, Math.PI * 2);
                            ctx!.fill();
                        }
                    }
                }
            }
        };

        const animate = () => {
            ctx!.fillStyle = '#020617';
            ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

            ctx!.strokeStyle = 'rgba(255, 255, 255, 0.02)';
            for (let i = 0; i < canvas!.width; i += 100) {
                ctx!.beginPath(); ctx!.moveTo(i, 0); ctx!.lineTo(i, canvas!.height); ctx!.stroke();
            }

            drawConnections();

            nodes.forEach(node => {
                node.update();
                node.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        initNodes();
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
