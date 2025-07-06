# CHANGELOG

All notable changes to this project will be documented in this file.

> **Tags**
>
> - Features
> - Bug Fixes
> - Performance Improvements
> - Dependency Updates
> - Breaking Changes
> - Enhancements
> - Documentation
> - Internal

## v2.0.0 (2025-07-06)

#### Breaking Changes

Changed breakpoint matching logic from `>` to `>=`. When window width exactly matches a breakpoint value, that breakpoint is now active instead of the previous one. This aligns with standard CSS media query behavior where `min-width: 768px` activates at exactly 768px. ([c4b4cbb](https://github.com/sibiraj-s/react-layout-masonry/commit/c4b4cbb))

> [!NOTE]
> If you rely on the previous behavior where a window width of exactly 768px would use the 640px breakpoint configuration, you may need to adjust your breakpoint values accordingly.

#### Bug Fixes

- fix rendering in nextjs server components ([dd30824](https://github.com/sibiraj-s/react-layout-masonry/commit/dd30824))

## v1.2.0 (2024-11-04)

#### Features

- Support react 19 ([86d6391](https://github.com/sibiraj-s/react-layout-masonry/commit/86d6391))
- Support for server components with `use client` ([ab796bc](https://github.com/sibiraj-s/react-layout-masonry/commit/ab796bc))

## v1.1.0 (2023-10-02)

#### Bug Fixes

- Support Array syntax for breakpoints ([4e6c69c](https://github.com/sibiraj-s/react-layout-masonry/commit/4e6c69c))

## v1.0.7 (2023-10-02)

#### Bug Fixes

- Fix return type for Masonry component ([9b9bd1a](https://github.com/sibiraj-s/react-layout-masonry/commit/9b9bd1a))

## v1.0.6 (2023-08-25)

#### Enhancements

- Mark package as sideEffects free ([05e37db](https://github.com/sibiraj-s/react-layout-masonry/commit/05e37db))

## v1.0.5 (2023-08-25)

#### Bug Fixes

- Fix props spread correctly with style ([4781e8e](https://github.com/sibiraj-s/react-layout-masonry/commit/4781e8e))
- Fix export types ([655fbbd](https://github.com/sibiraj-s/react-layout-masonry/commit/655fbbd))

## v1.0.4 (2023-08-24)

#### Bug Fixes

- Fix columns not generated for empty children ([ed45df2](https://github.com/sibiraj-s/react-layout-masonry/commit/ed45df2))

## v1.0.3 (2023-08-23)

#### Features

- Add cjs output ([af273b2](https://github.com/sibiraj-s/react-layout-masonry/commit/af273b2))

#### Enhancements

- cleanup types ([811cf7c](https://github.com/sibiraj-s/react-layout-masonry/commit/811cf7c))

#### Internal

- Replace rollup with tsup ([af273b2](https://github.com/sibiraj-s/react-layout-masonry/commit/af273b2))

## v1.0.2 (2023-08-19)

#### Internal

- Fix LICENSE ([8f128c3](https://github.com/sibiraj-s/react-layout-masonry/commit/8f128c3))

## v1.0.1 (2023-08-16)

#### Bug Fixes

- Fix gap is set as zero by default ([3a6d3e0](https://github.com/sibiraj-s/react-layout-masonry/commit/3a6d3e0))
- Fix column prop is forwarded to container div ([aa0d327](https://github.com/sibiraj-s/react-layout-masonry/commit/aa0d327))

## v1.0.0 (2023-08-16)

Initial Release: React Layout Masonry
