// Affiliate partner IDs and tracking codes
const AFFILIATE_PARTNERS = {
  booking: {
    id: 'your_booking_partner_id',
    baseUrl: 'https://www.booking.com/hotel',
  },
  getyourguide: {
    id: 'your_gyg_partner_id',
    baseUrl: 'https://www.getyourguide.com',
  },
  klook: {
    id: 'your_klook_partner_id',
    baseUrl: 'https://www.klook.com',
  }
};

/**
 * Generate affiliate link for a specific partner and product
 */
export const generateAffiliateLink = (partner, productId, params = {}) => {
  const { id, baseUrl } = AFFILIATE_PARTNERS[partner];
  const queryParams = new URLSearchParams({
    aid: id,
    ...params
  });
  
  return `${baseUrl}/${productId}?${queryParams.toString()}`;
};

/**
 * Track affiliate link click
 */
export const trackAffiliateClick = (partner, productId) => {
  // Here you would implement tracking logic
  // For example, sending to your analytics service
  console.log(`Affiliate click tracked: ${partner} - ${productId}`);
};

/**
 * Get recommended hotels near an attraction
 */
export const getNearbyHotels = async (attraction, latitude, longitude) => {
  // In a real implementation, you would fetch from Booking.com API
  // For now, we'll return the static data from the attraction
  const hotels = attraction?.affiliateInfo?.hotels || [];
  return hotels;
};

/**
 * Get related tours and activities
 */
export const getRelatedActivities = async (attraction, attractionName) => {
  // In a real implementation, you would fetch from GetYourGuide/Klook API
  // For now, we'll return the static data from the attraction
  const activities = attraction?.affiliateInfo?.activities || [];
  return activities;
};
