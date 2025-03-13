import { SVGProps } from "react";

export function TalentScanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
      <g id="job_search" data-name="job search">
        {/* Magnifying glass handle */}
        <path
          className="handle"
          d="m29.29 30.71-7-7a1 1 0 0 1 1.42-1.42l7 7a1 1 0 0 1-1.42 1.42z"
          fill="currentColor"
        />

        {/* Main circle background */}
        <circle cx="14" cy="14" r="13" className="circle-bg" fill="#fff" />

        {/* Person body */}
        <path
          className="person"
          d="M14 12.6c-3.22 0-5.08 4.26-3.79 7.75a1 1 0 0 0 .94.65h5.7a1 1 0 0 0 .94-.65c1.3-3.52-.58-7.75-3.79-7.75z"
          fill="#3b5fe0"
        />

        {/* Person head */}
        <path
          d="M14 7a3.4 3.4 0 1 0 3.4 3.4A3.4 3.4 0 0 0 14 7z"
          fill="#89CFF0"
        />
      </g>
    </svg>
  );
}
