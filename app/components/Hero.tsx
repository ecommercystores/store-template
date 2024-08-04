import { getHeroDetails } from "@/actions/hero-details";
import { BannerCarousel } from "@/components/carousel";

const Hero = async () => {
  const { images, title, description } = await getHeroDetails();
  return (
    <section className="md:px-8 ">
      <div className="mb-8 md:rounded-3xl md:shadow-lg h-[70vh] lg:h-[85vh] w-full">
        <div className="md:rounded-2xl w-full h-full relative">
          <BannerCarousel
            images={images}
            title={title}
            description={description}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
