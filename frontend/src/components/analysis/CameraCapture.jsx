import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { Camera, RefreshCw, CheckCircle2, Upload, Sparkles, Image as ImageIcon } from "lucide-react";

export default function CameraCapture({ onCapture }) {
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [mode, setMode] = useState("camera"); // 'camera' or 'upload'
  const [cameraError, setCameraError] = useState(false);

  // Webcam config
  const videoConstraints = {
    width: 720,
    height: 720,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const image = webcamRef.current.getScreenshot();
      if (image) setImgSrc(image);
    }
  }, [webcamRef]);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const retake = () => {
    setImgSrc(null);
  };

  const confirmCapture = () => {
    if (imgSrc) {
      onCapture(imgSrc);
    }
  };

  // Sample quick test photo if webcam is unavailable
  const handleUseSamplePhoto = () => {
    const sample = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop";
    setImgSrc(sample);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-6 md:p-10 bg-white rounded-3xl shadow-sm border border-gray-150 mb-8">
      <div className="text-center mb-6 max-w-lg">
        <span className="text-xs font-bold uppercase tracking-wider text-[#A855F7] mb-1 block">
          AI Precision Diagnostics
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Face Skin Analysis</h2>
        <p className="text-sm font-medium text-gray-500">
          Position your face in good lighting, or upload a clear selfie to detect 31 vital skin parameters.
        </p>

        {/* Mode switcher tabs */}
        {!imgSrc && (
          <div className="inline-flex p-1 bg-gray-100 rounded-2xl mt-4">
            <button
              onClick={() => setMode("camera")}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                mode === "camera" ? "bg-white text-[#7C3AED] shadow-sm" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Camera className="w-4 h-4" />
              Live Camera
            </button>
            <button
              onClick={() => setMode("upload")}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                mode === "upload" ? "bg-white text-[#7C3AED] shadow-sm" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Upload className="w-4 h-4" />
              Upload Photo
            </button>
          </div>
        )}
      </div>

      {/* Frame Container */}
      <div className="relative w-full max-w-sm aspect-square rounded-full overflow-hidden border-4 border-[#F3E8FF] shadow-inner mb-8 mx-auto flex items-center justify-center bg-gray-50">
        {!imgSrc ? (
          mode === "camera" && !cameraError ? (
            <>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                onUserMediaError={() => setCameraError(true)}
                className="w-full h-full object-cover"
                mirrored={true}
              />
              {/* Overlay reticle for face alignment */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-[65%] h-[75%] border-2 border-dashed border-[#A855F7]/60 rounded-[50px] animate-pulse"></div>
              </div>
            </>
          ) : (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-[#FAF5FF] text-[#A855F7] flex items-center justify-center mb-3">
                <ImageIcon className="w-7 h-7" />
              </div>
              <p className="text-xs font-bold text-gray-800 mb-1">Click to browse your photo</p>
              <p className="text-[11px] text-gray-500">JPG, PNG, or WEBP up to 10MB</p>
              <input 
                ref={fileInputRef}
                type="file" 
                accept="image/*" 
                onChange={handleFileUpload} 
                className="hidden" 
              />
            </div>
          )
        ) : (
          <img src={imgSrc} alt="Captured preview" className="w-full h-full object-cover" />
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {!imgSrc ? (
          mode === "camera" && !cameraError ? (
            <button
              onClick={capture}
              className="flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-3.5 rounded-2xl font-bold text-sm shadow-md shadow-purple-500/20 transition-all cursor-pointer"
            >
              <Camera className="w-5 h-5" />
              Capture Face
            </button>
          ) : (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-3.5 rounded-2xl font-bold text-sm shadow-md shadow-purple-500/20 transition-all cursor-pointer"
            >
              <Upload className="w-5 h-5" />
              Select File From Device
            </button>
          )
        ) : (
          <>
            <button
              onClick={retake}
              className="flex items-center gap-2 bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 px-6 py-3.5 rounded-2xl font-bold text-sm transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Retake / Change
            </button>
            <button
              onClick={confirmCapture}
              className="flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3.5 rounded-2xl font-bold text-sm shadow-md shadow-purple-500/20 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Analyze with AI
            </button>
          </>
        )}

        {!imgSrc && (
          <button
            onClick={handleUseSamplePhoto}
            className="text-xs font-semibold text-gray-500 hover:text-[#7C3AED] px-3 py-2 transition-colors cursor-pointer"
          >
            Or try with sample photo
          </button>
        )}
      </div>
    </div>
  );
}
