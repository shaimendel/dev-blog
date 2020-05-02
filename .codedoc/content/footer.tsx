import { CodedocConfig } from '@codedoc/core';
import { Footer as _Footer} from '@codedoc/core/components';


export function Footer(config: CodedocConfig, renderer: any) {
  return <_Footer>
    <a href="https://twitter.com/shai_mendel?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @shai_mendel</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <hr/>
    <a href="https://www.linkedin.com/in/shai-mendel-4404a6133/" class="fa fa-linkedin">Linkedin</a>
    <hr/>
    <a href="https://github.com/shaimendel">GitHub</a>
  </_Footer>;
}
