import { useEffect } from 'react';
import { usePlugin } from '../context/PluginProvider';

const ImageSliderPlugin = () => {
  const { registerPlugin } = usePlugin();

  useEffect(() => {
    registerPlugin({
      name: 'ImageSlider',
      component: ImageSlider,
    });
  }, []);

  return null;
};

export default ImageSliderPlugin;
