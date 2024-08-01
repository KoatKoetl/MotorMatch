import { AnchorIcon } from 'lucide-react';
import Title from '../Title';

export default function FeaturedBrand() {
  return (
    <section>
      <Title className="mb-2">
        <AnchorIcon /> Our partners
      </Title>
      <p>Some of the brands we work with</p>
      <div className="*:w-full my-10 *:max-w-40 border p-5 rounded flex justify-center gap-10 flex-wrap bg-zinc-100">
        <img src="/images/brands/rangeRover.png" className="h-12" alt="range rover" />
        <img src="/images/brands/astonMartin.png" className="h-12" alt="aston martin" />
        <img src="/images/brands/ford.png" className="h-12" alt="ford" />
        <img src="/images/brands/maserati.png" className="h-12" alt="maserati" />
        <img src="/images/brands/mercedez.png" className="h-12" alt="mercedez" />
      </div>
    </section>
  );
}
