import { Box, GitHub, Globe, Layout } from "react-feather";

export default function ProjectCard({ item }) {
  return (
    <div className="card">
      <div className="card__heading">
        {item.homepage && item.homepage !== null ? (
          <Layout size={30} color="currentColor" />
        ) : (
          <Box size={30} color="currentColor" />
        )}

        <span>{item.name.replace(/-/g, " ").replace(/_/g, " ")}</span>
      </div>
      <div className="card__info">
        {item.description && item.description.length > 120
          ? item.description.substring(0, 120) + "..."
          : item.description}
      </div>
      <div className="portfolio__section__content__entry__content">
        {item.language !== null ? item.language : "HTML"}
      </div>
      <div className="portfolio__section__content__entry__buttons">
        <a
          href={item.html_url}
          target="_blank"
          className="portfolio__section__content__entry__button"
        >
          <GitHub size={20} color="currentColor" />
          Github
        </a>
        {item.homepage && item.homepage !== null ? (
          <a
            href={item.homepage}
            target="_blank"
            className="portfolio__section__content__entry__button"
          >
            <Globe size={20} color="currentColor" />
            Website
          </a>
        ) : null}
      </div>
    </div>
  );
}
