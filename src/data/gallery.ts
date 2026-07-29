import { IMAGES } from '@/data/images';
import { GalleryPhoto } from '@/lib/types';

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'g1',
    src: IMAGES.GALLERY.RHODODENDRONS,
    alt: 'Rhododendrons blooming in the Himalayas',
    caption: 'Vibrant rhododendrons blooming against the misty mountain backdrop',
    traveller: 'Ananya Sharma',
    location: 'Yumthang Valley, Sikkim',
    date: 'April 2024'
  },
  {
    id: 'g2',
    src: IMAGES.GALLERY.MOUNTAIN_STREAM,
    alt: 'Crystal clear mountain stream with snow peaks',
    caption: 'Feet dipped in a crystal-clear Himalayan stream with snow-capped peaks rising behind',
    traveller: 'Rohit Mehra',
    location: 'Zero Point, Sikkim',
    date: 'May 2024'
  },
  {
    id: 'g3',
    src: IMAGES.GALLERY.WATERFALL,
    alt: 'Majestic waterfall cascading down cliff',
    caption: 'A breathtaking waterfall cascading down the dramatic cliffs of North Sikkim',
    traveller: 'Priya Das',
    location: 'Lachung, Sikkim',
    date: 'March 2024'
  }
];
