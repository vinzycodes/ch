import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[rgb(249,246,237)]">
      <Image
        src="/main-logo.png"
        width={300}
        height={200}
        alt="Coffee Shop Logo"
      />
    </div>
  );
}
