import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/herobg.jpeg";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Warna gelap transparan
          backgroundBlendMode: "multiply", // Mencampur warna dengan gambar
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Bingung mau masak apa hari ini? Jangan khawatir! Cukup masukkan bahan yang tersedia di dapurmu, dan biarkan kami menyajikan berbagai resep lezat yang bisa kamu coba. Masak jadi lebih mudah, praktis, dan anti ribet!
            </p>
            <Link to={"/recipe"}>
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
