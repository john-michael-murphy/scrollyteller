<script>
	import Scrollyteller from '$lib/Scrollyteller.svelte';
</script>

<Scrollyteller
	slides={[
		{
			annotation:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. Morbi euismod tempor felis, elementum lobortis leo tristique et. In bibendum at ex finibus placerat.',
			slide: {
				type: 'text',
				value:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. Morbi euismod tempor felis, elementum lobortis leo tristique et. In bibendum at ex finibus placerat.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. Morbi euismod tempor felis, elementum lobortis leo tristique et. In bibendum at ex finibus placerat.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. Morbi euismod tempor felis, elementum lobortis leo tristique et. In bibendum at ex finibus placerat.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. Morbi euismod tempor felis, elementum lobortis leo tristique et. In bibendum at ex finibus placerat.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. Morbi euismod tempor felis, elementum lobortis leo tristique et. In bibendum at ex finibus placerat.\n'
			}
		},
		{
			annotation:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. Morbi euismod tempor felis, elementum lobortis leo tristique et. In bibendum at ex finibus placerat.',
			slide: {
				type: 'text',
				value:
					'Lorem <b>ipsum dolor sit amet</b>, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. Morbi euismod tempor felis, elementum lobortis leo tristique et. In bibendum at ex finibus placerat.'
			}
		},
		{
			annotation:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. Morbi euismod tempor felis, elementum lobortis leo tristique et. In bibendum at ex finibus placerat.',
			slide: {
				type: 'text',
				value:
					'Lorem <em>ipsum dolor sit amet</em>, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. <em>Proin tincidunt in metus consectetur pellentesque. Class aptent taciti</em> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. Morbi euismod tempor felis, elementum lobortis leo tristique et. In bibendum at ex finibus placerat.'
			}
		},
		{
			annotation:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. Morbi euismod tempor felis, elementum lobortis leo tristique et. In bibendum at ex finibus placerat.',
			slide: {
				type: 'text',
				value:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. Morbi euismod tempor felis, elementum lobortis leo tristique et. <b>In bibendum at ex finibus placerat.</b>'
			}
		},
		{
			annotation:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. <b>Morbi euismod tempor felis, elementum lobortis leo tristique et.</b> In bibendum at ex finibus placerat.',
			slide: {
				type: 'text',
				value:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. <b>Nam varius est in libero sollicitudin tempor.</b> Morbi euismod tempor felis, elementum lobortis leo tristique et. In bibendum at ex finibus placerat.'
			}
		},
		{
			annotation:
				'1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. Morbi euismod tempor felis, elementum lobortis leo tristique et. In bibendum at ex finibus placerat.',
			slide: { type: 'image', value: 'https://picsum.photos/id/1003/1200/1200' }
		},
		{
			annotation:
				'Cras ullamcorper dolor eu felis interdum, at ultrices velit blandit. In odio eros, faucibus eu odio vitae, sagittis sollicitudin lectus. Praesent et quam neque. Ut dictum pharetra urna, quis fringilla nulla convallis non. Cras urna enim, dignissim nec quam eget, consectetur pellentesque lorem. Suspendisse magna eros, placerat non mi sed, accumsan viverra dui. Maecenas pretium leo nec elit pellentesque, vel blandit sapien vulputate. Sed eu maximus tortor. Duis volutpat risus id magna suscipit dignissim. Donec vulputate vehicula lectus vel congue. Integer pellentesque velit ut velit elementum, sit amet vestibulum magna ornare. Ut ornare non leo ut porta. Quisque eu enim sit amet est pharetra tristique. Quisque commodo blandit sollicitudin.',
			slide: { type: 'image', value: 'https://picsum.photos/id/1004/200/300' }
		},
		{
			annotation:
				'Cras ullamcorper dolor eu felis interdum, at ultrices velit blandit. In odio eros, faucibus eu odio vitae, sagittis sollicitudin lectus. Praesent et quam neque. Ut dictum pharetra urna, quis fringilla nulla convallis non. Cras urna enim, dignissim nec quam eget, consectetur pellentesque lorem. Suspendisse magna eros, placerat non mi sed, accumsan viverra dui. Maecenas pretium leo nec elit pellentesque, vel blandit sapien vulputate. Sed eu maximus tortor. Duis volutpat risus id magna suscipit dignissim. Donec vulputate vehicula lectus vel congue. Integer pellentesque velit ut velit elementum, sit amet vestibulum magna ornare. Ut ornare non leo ut porta. Quisque eu enim sit amet est pharetra tristique. Quisque commodo blandit sollicitudin.',
			slide: {
				type: 'image',
				value: 'https://drive.google.com/uc?id=1TPDljQoc41iEX-ps-wgLFhMbHp-k2Kts'
			}
		},
		{
			annotation:
				'Donec congue, nunc vitae pretium vulputate, lacus quam facilisis metus, luctus aliquam nulla risus at eros. Morbi consequat quis ipsum sit amet rhoncus. Donec tristique, orci a sagittis aliquet, neque elit interdum dui, ut ultricies nulla tortor in mauris. Aenean mattis finibus bibendum. Sed egestas hendrerit orci sit amet aliquet. Vivamus rutrum rhoncus felis, sit amet pulvinar purus feugiat vitae. Duis sagittis viverra sagittis. Proin sed faucibus felis, a vehicula dolor. Cras eu dolor justo. Mauris imperdiet ex eu tellus convallis vestibulum sed nec magna. Nunc tempus diam eu porta tempus.',
			slide: { type: 'image', value: 'https://picsum.photos/id/1015/200/300' }
		},
		{
			annotation:
				'Donec congue, nunc vitae pretium vulputate, lacus quam facilisis metus, luctus aliquam nulla risus at eros. Morbi consequat quis ipsum sit amet rhoncus. Donec tristique, orci a sagittis aliquet, neque elit interdum dui, ut ultricies nulla tortor in mauris. Aenean mattis finibus bibendum. Sed egestas hendrerit orci sit amet aliquet. Vivamus rutrum rhoncus felis, sit amet pulvinar purus feugiat vitae. Duis sagittis viverra sagittis. Proin sed faucibus felis, a vehicula dolor. Cras eu dolor justo. Mauris imperdiet ex eu tellus convallis vestibulum sed nec magna. Nunc tempus diam eu porta tempus.',
			slide: {
				type: 'video',
				value:
					'https://st2.depositphotos.com/1297553/8330/v/600/depositphotos_83307858-stock-video-abstract-text-design-lorem-ipsum.mp4'
			}
		},
		{
			annotation:
				'4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. Morbi euismod tempor felis, elementum lobortis leo tristique et. In bibendum at ex finibus placerat.',
			slide: {
				type: 'text',
				value:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sapien risus. Suspendisse potenti. Proin tincidunt in metus consectetur pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere dolor mi, ut dictum nibh convallis non. Nam varius est in libero sollicitudin tempor. Morbi euismod tempor felis, elementum lobortis leo tristique et. In bibendum at ex finibus placerat.'
			}
		}
	]}
/>
