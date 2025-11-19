'use client';

import { useState } from 'react';

interface Addon {
  name: string;
  price: number;
}

interface PricingPackageProps {
  packageType: 'basic' | 'essential' | 'professional' | 'premium';
  name: string;
  originalPrice: number;
  discountPrice: number;
  description: string;
  features: string[];
  addons: Addon[];
  timeline: string;
}

export default function PricingPackage({
  packageType,
  name,
  originalPrice,
  discountPrice,
  description,
  features,
  addons,
  timeline,
}: PricingPackageProps) {
  const [selectedAddons, setSelectedAddons] = useState<Set<number>>(new Set());
  const [currentOriginalPrice, setCurrentOriginalPrice] = useState(originalPrice);
  const [currentDiscountPrice, setCurrentDiscountPrice] = useState(discountPrice);

  const toggleAddon = (index: number, addonPrice: number) => {
    const newSelectedAddons = new Set(selectedAddons);

    if (newSelectedAddons.has(index)) {
      newSelectedAddons.delete(index);
      setCurrentDiscountPrice(currentDiscountPrice - addonPrice);
      setCurrentOriginalPrice(currentOriginalPrice - Math.round(addonPrice / 0.92));
    } else {
      newSelectedAddons.add(index);
      setCurrentDiscountPrice(currentDiscountPrice + addonPrice);
      setCurrentOriginalPrice(currentOriginalPrice + Math.round(addonPrice / 0.92));
    }

    setSelectedAddons(newSelectedAddons);
  };

  const addonsTotal = Array.from(selectedAddons).reduce((sum, index) => sum + addons[index].price, 0);

  return (
    <div className={`package package-${packageType}`}>
      <span className="badge savings">💰 8% OFF</span>

      <div className="package-header">
        <div className="package-name">{name}</div>
        <div className="package-subtitle">{description}</div>
      </div>

      <div className="price-breakdown">
        <div className="base-price-section">
          <div className="price-label">Base Package</div>
          <div className="package-price">
            <span className="discount-price">${discountPrice.toLocaleString()}</span>
            <span className="original-price">${originalPrice.toLocaleString()}</span>
          </div>
        </div>

        {selectedAddons.size > 0 && (
          <>
            <div className="addons-total-section">
              <div className="price-label">Add-ons ({selectedAddons.size})</div>
              <div className="addons-price">+${addonsTotal.toLocaleString()}</div>
            </div>
            <div className="divider"></div>
            <div className="total-price-section">
              <div className="total-label">Your Total</div>
              <div className="total-price">${currentDiscountPrice.toLocaleString()}</div>
            </div>
          </>
        )}
      </div>

      <div className="features-section">
        <div className="section-header">✓ What's Included</div>
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className={feature.includes('AI') || feature.includes('24/7') || feature.includes('Custom') || feature.includes('Multi-language') || feature.includes('Auto') || feature.includes('CRM') || feature.includes('Priority') ? 'premium-feature' : ''}>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="addons-section">
        <div className="section-header">+ Customize Your Package</div>
        <div className="addons-grid">
          {addons.map((addon, index) => (
            <div
              key={index}
              className={`addon-card ${selectedAddons.has(index) ? 'addon-selected' : ''}`}
              onClick={() => toggleAddon(index, addon.price)}
            >
              <div className="addon-checkbox">
                {selectedAddons.has(index) && <span className="checkmark">✓</span>}
              </div>
              <div className="addon-content">
                <div className="addon-name">{addon.name}</div>
                <div className="addon-price">${addon.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="cta-button">
        Get Started - ${currentDiscountPrice.toLocaleString()}
      </button>

      <div className="timeline">⏱️ {timeline}</div>
    </div>
  );
}
