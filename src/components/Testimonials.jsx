import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import r1 from "../assets/images/r1.png";
import r2 from "../assets/images/r2.png";
import r3 from "../assets/images/r3.png";
import r4 from "../assets/images/r4.png";
import r5 from "../assets/images/r5.png";

const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    title: "Organic Farmer, Coimbatore",
    review:
      "I’ve been using their groundnut oil for over a year now — the aroma and freshness remind me of the oils we used to make in our village. Absolutely authentic!",
    rating: 4,
    bg: r1,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Aishwarya Menon",
    title: "Nutritionist, Bangalore",
    review:
      "These cold-pressed oils are rich in nutrients and unrefined. I often recommend them to my clients because they support a balanced and healthy diet naturally.",
    rating: 5,
    bg: r2,
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    name: "Vijay Narayan",
    title: "Chef & Restaurant Owner, Chennai",
    review:
      "Using their sesame and coconut oils in my kitchen has transformed our dishes — they bring out deep, earthy flavors you can’t get from refined oils.",
    rating: 4,
    bg: r3,
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    id: 4,
    name: "Deepika Iyer",
    title: "Homemaker, Madurai",
    review:
      "Every drop feels pure and natural. I love that their oils are sun-filtered — it’s the same traditional method my grandmother used at home.",
    rating: 4.7,
    bg: r4,
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    id: 5,
    name: "Arun Prakash",
    title: "Fitness Coach, Hyderabad",
    review:
      "I’m impressed by the quality and transparency. Their oils retain the natural nutrients and give a wholesome taste — exactly what clean eating should be.",
    rating: 5,
    bg: r5,
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];



export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const visibleTestimonials = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

  return (
    <section className="my-25 bg-white text-center">
      <h2 className="text-4xl font-semibold text-green-900 mb-10">
        Our Client Reviews
      </h2>

      <div className="relative mx-auto max-w-8/10 flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute -left-5 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-6 h-6 text-green-900" />
        </button>

        {/* Cards */}
        <div className="grid md:grid-cols-3 z-0 gap-6">
          {visibleTestimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-xl shadow-lg transform transition duration-500 hover:-translate-y-1"
            >
              {/* Background image */}
              <img
                src={item.bg}
                alt={item.name}
                className="h-120 w-full rounded-xl object-cover"
              />

              {/* Overlay Card */}
              <div className="absolute top-11/20 left-1/2 -translate-x-1/2 bg-white w-11/12 rounded-md shadow-md p-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-15 h-15 rounded-full drop-shadow-3xl mx-auto -mt-10"
                />
                <h3 className="mt-3 font-semibold text-green-900">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.title}</p>
                <p className="text-gray-700 text-xs italic mb-4">“{item.review}”</p>

                {/* Rating stars */}
                <div className="flex justify-center gap-1 text-green-700">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < item.rating ? "#047857" : "none"}
                      stroke="#047857"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute -right-5 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-6 h-6 text-green-900" />
        </button>
      </div>
    </section>
  );
}
