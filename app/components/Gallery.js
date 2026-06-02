'use client';

import { useState } from 'react';
import Modal from './Modal';
import Button from './Button';

export default function Gallery({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="gallery">
        {items.map((item, index) => (
          <div key={index} className="gallery-item">
            <img
              src={item.image}
              alt={item.title}
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <h3 className="gallery-title">{item.title}</h3>
              <Button
                variant="light"
                size="sm"
                onClick={() => setSelectedItem(item)}
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
      >
        {selectedItem && (
          <div className="d-flex flex-column flex-md-row gap-4">
            <div className="flex-shrink-0" style={{ flex: '0 0 auto', maxWidth: '400px' }}>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-100 rounded"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </div>
            <div className="flex-fill">
              <h2 className="mb-3">{selectedItem.title}</h2>
              <p className="mb-4 text-muted">{selectedItem.description}</p>

              <div className="d-flex flex-column gap-3">
                <div>
                  <h4 className="mb-2">Shop on Etsy</h4>
                  <a
                    href={selectedItem.etsyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-primary"
                  >
                    View on Etsy →
                  </a>
                </div>

                <div>
                  <h4 className="mb-2">Shop on Threadless</h4>
                  <a
                    href={selectedItem.threadlessLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-primary"
                  >
                    View on Threadless →
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-4 border-top">
                <Button
                  variant="primary"
                  onClick={() => setSelectedItem(null)}
                  className="mr-2"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
