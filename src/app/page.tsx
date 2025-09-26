import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                Unlock Your Potential with EduVerse
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Explore a universe of knowledge with our cutting-edge e-learning platform. Engage with interactive courses, track your progress, and achieve your goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/courses">
                  Explore Courses
                </Link>
              </Button>
            </div>
          </div>
          {heroImage && (
            <Image
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-lg"
              data-ai-hint={heroImage.imageHint}
              height={600}
              src={heroImage.imageUrl}
              width={600}
            />
          )}
        </div>
      </div>
    </section>
  );
}
