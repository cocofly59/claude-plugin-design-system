import { cx } from "../../internal/cx";

export interface TruncatedPathProps {
  /** A path whose segments are separated by "/". */
  path: string;
  className?: string;
}

/** A file path on one line, shortened in its middle: the directory gives way first, the file name stays whole. */
export function TruncatedPath({ path, className }: TruncatedPathProps) {
  const slash = path.lastIndexOf("/");
  const directory = path.slice(0, slash + 1);
  const name = path.slice(slash + 1);
  return (
    <span className={cx("cpds-truncated-path", className)} title={path}>
      {directory !== "" && <span className="cpds-truncated-path__directory">{directory}</span>}
      <span className="cpds-truncated-path__name">{name}</span>
    </span>
  );
}
