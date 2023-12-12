"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Pariatur est amet consectetur est magna magna Pariatur est amet consectetur est magna magna.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Evelyn Anderson",
    job: "Interior Designer",
    review:
      "Pariatur est amet consectetur est magna magna Pariatur est amet consectetur est magna magna.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "John Doe",
    job: "Game Dev",
    review:
      "Pariatur est amet consectetur est magna magna Pariatur est amet consectetur est magna magna.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Emily Smith",
    job: "Therapist",
    review:
      "Pariatur est amet consectetur est magna magna Pariatur est amet consectetur est magna magna.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Oliver Taylor",
    job: "Engineer",
    review:
      "Pariatur est amet consectetur est magna magna Pariatur est amet consectetur est magna magna.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Mason Wilson",
    job: "Video Editor",
    review:
      "Pariatur est amet consectetur est magna magna Pariatur est amet consectetur est magna magna.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-12 text-center section-title">Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="p-8 bg-tertiary dark:bg-secondary/40 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex item-center gap-x-4">
                      {/* Image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col ">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
