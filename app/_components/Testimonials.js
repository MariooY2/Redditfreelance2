function Testimonial({ name, rating, text }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-5 w-80 h-72 flex flex-col justify-between">
      <h3 className="text-xl font-bold mb-2 text-pink-600">{name}</h3>
      <div className="flex items-center mb-2">
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <svg
              key={`full-${i}`}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.192h4.405c.969 0 1.371 1.24.588 1.81l-3.571 2.595 1.357 4.192c.3.921-.755 1.688-1.541 1.112L10 13.187l-3.571 2.595c-.787.576-1.842-.191-1.541-1.112l1.357-4.192-3.571-2.595c-.783-.57-.38-1.81.588-1.81h4.405L9.049 2.927z" />
            </svg>
          ))}
        {halfStar && (
          <svg
            key="half"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12.586l3.165 2.303-.862-2.66 2.33-1.688h-2.858L10 5.14l-.775 2.401H6.367l2.33 1.688-.862 2.66L10 12.586z" />
          </svg>
        )}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <svg
              key={`empty-${i}`}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 15.273l-4.472 3.261 1.357-4.192-3.571-2.595h4.405l1.357-4.192 1.357 4.192h4.405l-3.571 2.595 1.357 4.192L10 15.273z" />
            </svg>
          ))}
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Daisy",
      rating: 5,
      text: "I love the service provided by Kuartz. My teeth were shining so brightly after my session, my husband took one look at me and handed me his credit card without me asking. Amazing work 👍",
    },
    {
      name: "Sharlene",
      rating: 4.5,
      text: "For top-notch quality service, I highly recommend Kuartz services. I came in for body sculpting and I saw immediate results. I am truly amazed!!!",
    },
    {
      name: "Patrice",
      rating: 5,
      text: "After seeing how perfectly placed my best friend's lashes were by Kuartz, I rushed to make an appointment and let me tell you I am extremely impressed by my lashes, highly recommend you give them a visit😍",
    },
    {
      name: "Mya",
      rating: 5,
      text: "For the carnival season my teeth were dazzling with teeth jewelry from Kuartz. They were more radiant than my costume, I loved them, will definitely be booking another appointment, birthday themed teeth jewelry. Simply beautiful work..😁",
    },
  ];
  return (
    <>
      <div className=" flex justify-center items-center font-bold lg:text-7xl sm:text-4xl text-3xl mb-10">
        Reviews
      </div>
      <div className="flex justify-center items-center mt-5 gap-14 flex-wrap">
        {reviews.map((review, index) => (
          <Testimonial key={index} {...review} />
        ))}
      </div>
    </>
  );
}

export default Testimonials;
