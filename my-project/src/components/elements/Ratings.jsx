import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Ratings = () => {
    const [colorTill, setColorTill] = useState(0);
    const star = [1, 2, 3, 4, 5];

    const handleRating = (s) => {
        setColorTill(s);
    };

    return (
        <div className="flex flex-row text-4xl">
            {star.map((s) => (
                <FaStar
                    key={s}
                    className={s <= colorTill ? "text-yellow-400" : "invert"}
                    onClick={() => handleRating(s)}
                />
            ))}
        </div>
    );
};

export default Ratings;
