import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { events } from '@/lib/events';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '', '/about', '/founder', '/games', '/events', '/events/past',
    '/packages', '/majestic-pride', '/locations', '/gallery',
    '/bookings', '/faq', '/responsible-gaming', '/privacy', '/terms',
  ].map((r) => ({ url: `${site.url}${r}`, lastModified: new Date() }));

  const eventRoutes = events.map((e) => ({
    url: `${site.url}/events/${e.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...eventRoutes];
}
