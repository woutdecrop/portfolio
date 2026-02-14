import nilsImgr from "@/assets/Nils.jpg";
import Image from "next/image";

const FunProjectSection = () => {
  return (
    <section id="fun-project" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">

        <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-white text-center">
          Python Side Project 
        </h3>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Not everything has to be scientific and responsible. Sometimes you just
          build a real-time gesture tracker that reacts to dramatic poses of Nils and shows
          legendary overlays — purely for cultural and highly academic reasons.
        </p>

      <div className="flex flex-col md:flex-row items-start gap-6">

        {/* Image */}
        <div className="w-full md:w-[200px] flex-shrink-0">
          <div className="overflow-hidden rounded-xl border border-blue-500/30 shadow-lg">
            <Image
              src={nilsImgr}
              alt="Nils Camera Tracker preview"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <p className="text-gray-500 text-xs text-center mt-3">
            Totally serious research interface
          </p>
        </div>

        {/* Text */}
        <div className="flex-1">


            {/* Text */}
            <div className="flex-1">
                <h4 className="text-xl font-semibold text-white mb-3">
                Nils Camera Tracker
                </h4>

                <p className="text-gray-400 mb-6">
                A webcam gesture detector built with MediaPipe and OpenCV that recognizes
                hand and face gestures in real time and reacts with themed overlay images.
                Includes chin poses, dramatic head gestures, perfect signs, and surprise
                face detection. Yes — this is satire. Yes — it works.
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-6">
                <ul className="space-y-2">
                    <li>🤚 Hand pose detection</li>
                    <li>😮 Mouth-open trigger</li>
                    <li>📷 Live webcam feed</li>
                </ul>

                <ul className="space-y-2">
                    <li>🧠 MediaPipe landmarks</li>
                    <li>🎭 Gesture overlays</li>
                    <li>🧪 Built for chaos</li>
                </ul>
                </div>

                <a
                href="https://github.com/woutdecrop/Nils_Camera_Tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors"
                >
                View on GitHub →
                </a>
            </div>
            </div>


        </div>

      </div>
    </section>
  );
};

export default FunProjectSection;
