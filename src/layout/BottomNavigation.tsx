import { useState, useEffect } from "react";
import menuItems from "./menuItems";
import { Link } from "react-router-dom";
import { Icon, Card, Button } from "@tremor/react";
import { RiArrowUpDoubleFill } from "@remixicon/react";

const BottomNavigation = () => {
  const [scrollY, setScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Card className="w-screen rounded-b-none">
      <div className="flex justify-end w-100">
        <div>
          {menuItems.map((item) => (
            <Link to={item.path} key={item.path}>
              <Button className="rounded-full p-2 ml-4" color="neutral">
                <Icon icon={item.icon} size="lg" color="yellow" />
              </Button>
            </Link>
          ))}
        </div>
        {scrollY > 0 && (
          <Button
            className="rounded-full p-2 ml-4"
            color="neutral"
            onClick={scrollToTop}
          >
            <Icon icon={RiArrowUpDoubleFill} color="yellow" size="lg" />
          </Button>
        )}
      </div>
    </Card>
  );
};

export default BottomNavigation;
