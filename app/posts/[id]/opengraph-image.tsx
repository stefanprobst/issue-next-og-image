/**
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx
 */

import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

/**
 * `generateStaticParams` is necessary to generate og images at build time.
 *
 * ```bash
 * find . -name opengraph-image.body
 * ```
 */

// export function generateStaticParams() {
//   return [{ id: "abc" }];
// }

export const alt = "Post";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image(props: PageProps<"/posts/[id]">) {
  const { params } = props;

  const { id } = await params;

  const interSemiBold = await readFile(
    join(process.cwd(), "public/assets/inter-semibold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Post {id}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
