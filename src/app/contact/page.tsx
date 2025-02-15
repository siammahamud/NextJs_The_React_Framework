import { SparklesCore } from "@/components/ui/sparkles";

const ContactPage = () => {
  return (
    <div className="relative bg-black">
      <h1 className="text-center text-4xl text-teal-400 tracking-widest font-bold">
        ContactPage
      </h1>
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={1.6}
        maxSize={4}
        particleDensity={100}
        // speed={1}
        className="w-full h-full"
        particleColor="#FF0133"
      />
    </div>
  );
};

export default ContactPage;
