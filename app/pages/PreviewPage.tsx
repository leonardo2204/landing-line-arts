import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Trash2, Sparkles, Loader2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { transformImage } from '../utils/mockData';

const PreviewPage = () => {
  const [isAdjusting, setIsAdjusting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { photos, setCurrentStep, removePhoto, updatePhoto } = useAppContext();
  const navigate = useNavigate();
  
  const [contrast, setContrast] = useState(100);
  const [lineThickness, setLineThickness] = useState(50);
  const [detail, setDetail] = useState(75);

  useEffect(() => {
    setCurrentStep(2);
    document.title = 'Preview Your Transformed Photo | MylineArts';
    
    // Redirect if no photos
    if (photos.length === 0) {
      navigate('/upload');
    }
  }, [setCurrentStep, photos, navigate]);

  const handleRemoveImage = () => {
    if (photos.length > 0) {
      removePhoto(photos[0].id);
      navigate('/upload');
    }
  };

  const handleRegenerate = async () => {
    if (photos.length === 0) return;
    
    setIsLoading(true);
    
    try {
      // Transform the image using the Supabase Edge Function
      const transformedUrl = await transformImage(photos[0].originalUrl);
      
      updatePhoto(photos[0].id, {
        transformedUrl,
        status: 'completed'
      });
    } catch (error) {
      console.error('Error regenerating image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  if (photos.length === 0) {
    return null; // Will redirect in useEffect
  }

  const photo = photos[0];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preview Your Coloring Page
          </h1>
          <p className="text-xl text-gray-600">
            Review your transformed photo and make any adjustments before proceeding
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="relative rounded-lg overflow-hidden shadow-lg mb-4">
                {isLoading ? (
                  <div className="flex items-center justify-center bg-gray-100 h-96">
                    <div className="text-center">
                      <Loader2 className="h-12 w-12 text-primary-500 animate-spin mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Regenerating your coloring page...</p>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={photo.transformedUrl || photo.originalUrl} 
                    alt="Transformed coloring page" 
                    className="w-full h-auto object-contain"
                    style={{ 
                      filter: isAdjusting 
                        ? `contrast(${contrast}%) brightness(${100 + (lineThickness - 50) * 0.5}%) grayscale(100%) invert(1) saturate(0) brightness(1.5) contrast(150%)`
                        : 'grayscale(100%) invert(1) saturate(0) brightness(1.5) contrast(150%)'
                    }}
                  />
                )}
                
                <div className="absolute top-3 right-3 flex space-x-2">
                  <button
                    onClick={handleRemoveImage}
                    className="p-2 bg-white bg-opacity-80 rounded-full text-gray-600 hover:text-error-600 transition-colors"
                    aria-label="Remove image"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={() => setIsAdjusting(!isAdjusting)}
                  className="btn btn-outline text-sm px-4 py-2 mr-4"
                >
                  {isAdjusting ? 'Hide Adjustments' : 'Adjust Settings'}
                </button>
                
                <button
                  onClick={handleRegenerate}
                  disabled={isLoading}
                  className={`btn btn-primary text-sm px-4 py-2 flex items-center ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Regenerate
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                How does it look?
              </h2>
              
              {isAdjusting ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Line Thickness: {lineThickness}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={lineThickness}
                      onChange={(e) => setLineThickness(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contrast: {contrast}%
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="150"
                      value={contrast}
                      onChange={(e) => setContrast(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Detail Level: {detail}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={detail}
                      onChange={(e) => setDetail(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  
                  <button
                    onClick={handleRegenerate}
                    disabled={isLoading}
                    className="btn btn-primary w-full mt-4"
                  >
                    Apply Changes
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Your photo has been transformed into a coloring page. If you're happy with the result, you can proceed to create your full coloring book with 20 pages.
                  </p>
                  
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">What's included:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>20 personalized coloring pages</li>
                      <li>High-quality printable PDF</li>
                      <li>Option for professional printing and delivery</li>
                      <li>Custom cover with your name</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-xl font-bold text-gray-900 mb-1">$19.99</p>
                    <p className="text-gray-500 text-sm">One-time purchase</p>
                  </div>
                  
                  <button
                    onClick={handleProceedToCheckout}
                    className="btn btn-primary w-full mt-4"
                  >
                    Continue to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => navigate('/upload')}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Upload
          </button>
          
          <button
            onClick={handleProceedToCheckout}
            className="btn btn-primary"
          >
            Continue to Checkout
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PreviewPage;