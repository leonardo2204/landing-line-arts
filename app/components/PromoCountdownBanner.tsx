import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function PromoCountdownBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Expiration date: September 30, 2025, 23:59 GMT+7
  const expirationDate = useMemo(() => new Date('2025-09-30T23:59:00+07:00'), []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = expirationDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Update immediately
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [expirationDate]);

  if (!isVisible) {
    return null;
  }

  const promoUrl = "https://app.mylinearts.com?utm_source=landing_banner&utm_medium=promo_banner&utm_campaign=first_100_users_30off&utm_content=countdown_banner";

  return (
    <a
      href={promoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gradient-to-r from-primary-800 to-secondary-800 text-white py-2 hover:from-primary-900 hover:to-secondary-900 transition-colors cursor-pointer"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Mobile: Single row layout */}
          <div className="flex flex-col sm:hidden items-center gap-2">
            <div className="text-xs font-bold">
              🔥 {t('banner.promo.text')}
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-yellow-400 text-gray-900 px-3 py-2 rounded-lg font-bold text-sm shadow-lg">
                {t('banner.promo.code')}
              </span>
              <div className="flex items-center gap-1 text-xs">
                <span className="font-medium">{t('banner.promo.timeLeft')}</span>
                <div className="flex gap-1 ml-1">
                  {timeLeft.days > 0 && (
                    <span className="bg-white/20 px-1.5 py-0.5 rounded text-xs font-bold">
                      {timeLeft.days}d
                    </span>
                  )}
                  <span className="bg-white/20 px-1.5 py-0.5 rounded text-xs font-bold">
                    {timeLeft.hours.toString().padStart(2, '0')}h
                  </span>
                  <span className="bg-white/20 px-1.5 py-0.5 rounded text-xs font-bold">
                    {timeLeft.minutes.toString().padStart(2, '0')}m
                  </span>
                  <span className="bg-white/20 px-1.5 py-0.5 rounded text-xs font-bold">
                    {timeLeft.seconds.toString().padStart(2, '0')}s
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Two row layout */}
          <div className="hidden sm:block">
            <div className="flex flex-row items-center justify-center gap-6">
              <div className="text-sm md:text-base font-bold">
                🔥 {t('banner.promo.text')}
              </div>
              <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                {t('banner.promo.code')}
              </div>
            </div>

            <div className="mt-2 flex items-center justify-center gap-1 text-sm">
              <span className="font-medium">{t('banner.promo.timeLeft')}</span>
              <div className="flex gap-2 ml-2">
                {timeLeft.days > 0 && (
                  <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold">
                    {timeLeft.days}d
                  </span>
                )}
                <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold">
                  {timeLeft.hours.toString().padStart(2, '0')}h
                </span>
                <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold">
                  {timeLeft.minutes.toString().padStart(2, '0')}m
                </span>
                <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold">
                  {timeLeft.seconds.toString().padStart(2, '0')}s
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}