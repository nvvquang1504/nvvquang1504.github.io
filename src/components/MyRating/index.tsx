import { Rating, RatingProps } from "@mui/material";

const MyRating = (props: RatingProps) => {
  return (
    <Rating
      sx={{
        "& .MuiRating-icon": {
          color: "secondary.main",
        },
      }}
      color={"secondary.main"}
      {...props}
    />
  );
};

export default MyRating;
