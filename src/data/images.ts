/**
 * Centralized Image Configuration
 * 
 * Manage all image paths here. This makes it easy to replace images locally
 * without searching through the entire codebase.
 * 
 * Note: All image files must be located inside the `/public/` directory.
 */

export const IMAGES = {
  // Global & Branding
  LOGO: "/logo-new.png",
  AVATAR_PLACEHOLDER: "/images/avatar-placeholder.png",
  PATTERN_BG: "/images/pattern.svg",

  // Homepage Hero Slideshow
  // Add or remove strings here to control the number of slides
  HERO_SLIDESHOW: [
    "/images/hero-banner.jpg",
    "/images/sikkim.jpg",
    "/images/darjeeling.jpg",
    "/images/bhutan.jpg",
    "/images/northeast.jpg",
  ],

  // Specific Page Banners
  ABOUT_HERO: "/images/hero-banner.jpg",
  CAB_HERO: "/images/hero-banner.jpg",
  PACKAGES_HERO: "/images/hero-banner.jpg",
  DESTINATIONS_HERO: "/images/pattern.svg",

  // Core Destinations & Packages (Used for static fallback data)
  REGIONS: {
    DARJEELING: "/images/darjeeling.jpg",
    SIKKIM: "/images/sikkim.jpg",
    BHUTAN: "/images/bhutan.jpg",
    NORTHEAST: "/images/northeast.jpg",
  },

  // Gallery
  GALLERY: {
    DEFAULT_PKG: "/images/darjeeling-pkg.jpg",
    RHODODENDRONS: "/images/gallery/rhododendrons.jpg",
    MOUNTAIN_STREAM: "/images/gallery/mountain-stream.jpg",
    WATERFALL: "/images/gallery/waterfall.jpg",
  },

  // Team / Testimonials
  TEAM: {
    MEMBER_2: "/images/team-2.jpg",
  }
};
