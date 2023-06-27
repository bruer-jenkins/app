import PhotoUpload from "@/components/PhotoUpload";
import Signup from "@/components/signup";
export default function Home() {
  const handleSub = (e: any) => {
    // e.preventDefault();
  };
  return (
    <main>
      <h1 className="text-2xl">Yo bruer-jenkins!</h1>
      <p>Send this to the backend</p>
      <Signup />
      <p className="m-5">
        Let&apos;s figure out how to send a file to Firebase!
      </p>
      <PhotoUpload />
    </main>
  );
}
