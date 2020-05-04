import { CodedocConfig } from '@codedoc/core';
import { Header as _Header, GithubButton, Watermark } from '@codedoc/core/components';


export function Header(config: CodedocConfig, renderer: any) {
  return (
    <_Header>
      <a href="https://snyk.io/test/github/shaimendel/dev-blog"><img src="https://snyk.io/test/github/shaimendel/dev-blog/badge.svg"/></a>
      <p></p>
      <a href="https://github.com/shaimendel/dev-blog"><img src="https://img.shields.io/github/v/release/shaimendel/dev-blog?style=social"/></a>
    </_Header>
  )
}
