import type { ReactNode } from "react";
import { cx } from "../../internal/cx";
import { Icon } from "../Icon/Icon";
import type { IconGlyph } from "../Icon/icons";
import { Link } from "../Link/Link";
import { type Connection, LiveIndicator } from "../LiveIndicator/LiveIndicator";

export interface BreadcrumbItem {
  label: string;
  /** Leave it unset on the current page, the last item. */
  href?: string;
}

export interface AppHeaderProps {
  /** The interface's name. */
  title: string;
  /** An icon before the name. */
  icon?: IconGlyph;
  /** Where the page sits, the current page last. */
  breadcrumb?: readonly BreadcrumbItem[];
  /** Shows the live indicator when set. */
  connection?: Connection;
  /** Status badges and links at the end of the header. */
  actions?: ReactNode;
  className?: string;
}

/** The bar at the top of an interface: its name, the breadcrumb, the live indicator and a few actions. */
export function AppHeader({ title, icon, breadcrumb, connection, actions, className }: AppHeaderProps) {
  return (
    <header className={cx("cpds-app-header", className)}>
      <div className="cpds-app-header__title">
        {icon !== undefined && <Icon icon={icon} size="lg" />}
        <span>{title}</span>
      </div>
      {breadcrumb !== undefined && breadcrumb.length > 0 && (
        <nav aria-label="Breadcrumb" className="cpds-app-header__breadcrumb">
          <ol>
            {breadcrumb.map((item, index) => {
              const current = index === breadcrumb.length - 1;
              return (
                <li key={`${String(index)}-${item.label}`}>
                  {index > 0 && <span aria-hidden="true" className="cpds-app-header__separator">/</span>}
                  {item.href !== undefined && !current ? (
                    <Link href={item.href} variant="muted">
                      {item.label}
                    </Link>
                  ) : (
                    <span aria-current={current ? "page" : undefined} className="cpds-app-header__current">
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
      {(connection !== undefined || actions !== undefined) && (
        <div className="cpds-app-header__end">
          {connection !== undefined && <LiveIndicator connection={connection} />}
          {actions}
        </div>
      )}
    </header>
  );
}
