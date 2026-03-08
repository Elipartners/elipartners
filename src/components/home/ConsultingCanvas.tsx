'use client';

import { useEffect, useRef } from 'react';

export default function ConsultingCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let streams: any[] = [];
        const streamCount = 20;

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

        window.addEventListener('resize', resizeCanvas);

        class DataStream {
            x!: number;
            y!: number;
            length!: number;
            speed!: number;
            opacity!: number;

            constructor() {
                this.init();
            }

            init() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.length = Math.random() * 200 + 100;
                this.speed = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update() {
                this.y -= this.speed;
                if (this.y < -this.length) {
                    this.y = canvas!.height + this.length;
                    this.x = Math.random() * canvas!.width;
                }
            }

            draw() {
                const grad = ctx!.createLinearGradient(0, this.y, 0, this.y + this.length);
                grad.addColorStop(0, `rgba(52, 211, 153, ${this.opacity})`);
                grad.addColorStop(1, 'rgba(59, 130, 246, 0)');

                ctx!.strokeStyle = grad;
                ctx!.lineWidth = 1;
                ctx!.beginPath();
                ctx!.moveTo(this.x, this.y);
                ctx!.lineTo(this.x, this.y + this.length);
                ctx!.stroke();

                ctx!.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, 1, 0, Math.PI * 2);
                ctx!.fill();
            }
        }

        const drawHexGrid = () => {
            const size = 100;
            const h = size * Math.sqrt(3);
            ctx!.strokeStyle = 'rgba(59, 130, 246, 0.05)';
            ctx!.lineWidth = 1;

            for (let y = -h; y < canvas!.height + h; y += h / 2) {
                for (let x = -size; x < canvas!.width + size; x += size * 1.5) {
                    ctx!.beginPath();
                    for (let i = 0; i < 6; i++) {
                        const angle = (Math.PI / 3) * i;
                        const yIndex = Math.round(y / (h / 2));
                        const xOffset = x + (Math.abs(yIndex) % 2 === 0 ? 0 : size * 0.75);
                        ctx!.lineTo(xOffset + size * Math.cos(angle), y + size * Math.sin(angle));
                    }
                    ctx!.closePath();
                    ctx!.stroke();
                }
            }
        };

        const initStreams = () => {
            resizeCanvas();
            streams = [];
            for (let i = 0; i < streamCount; i++) {
                streams.push(new DataStream());
            }
        };

        const animate = () => {
            ctx!.fillStyle = '#040813';
            ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

            drawHexGrid();

            streams.forEach(stream => {
                stream.update();
                stream.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        initStreams();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 block" />;
}
