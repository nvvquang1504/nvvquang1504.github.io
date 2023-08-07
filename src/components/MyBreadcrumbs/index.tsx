import {
  Breadcrumbs,
  type BreadcrumbsProps,
  Link,
  Typography,
} from "@mui/material";

const MyBreadcrumbs = (
  props: BreadcrumbsProps & { links: string[]; text: string },
) => {
  return (
    <Breadcrumbs
      sx={{
        "& *": {
          textTransform: "uppercase",
        },
        ...props.sx,
      }}
    >
      {props.links.map((item, index) => {
        return (
          <Link key={index} color="inherit" underline={"hover"}>
            {item}
          </Link>
        );
      })}
      <Typography color={"black"} fontWeight={600}>
        {props.text}
      </Typography>
    </Breadcrumbs>
  );
};

export default MyBreadcrumbs;
