export const Home = () => {
  const HomeTopButton = [
    {
      name: "",
      category: "",
    },
  ];

  return (
    <>
      <div className="home-page maxWidth mx-auto">
        {/* Home Top Button */}
        <div className="flex justify-center">
          {HomeTopButton.map((button, index) => (
            <button key={index} className="home-top-button">
              {button.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
