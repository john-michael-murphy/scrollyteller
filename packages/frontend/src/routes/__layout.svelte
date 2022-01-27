<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
	rel="stylesheet"
/>
<slot />

<style>
	:root {
		--sfe-black00: #212529;
		--sfe-black10: #3d4652;
		--sfe-black20: #343a40;
		--sfe-black30: #495057;
		--sfe-black40: #6c757d;
		--sfe-black50: #adb5bd;
		--sfe-black60: #ced4da;
		--sfe-black70: #dee2e6;
		--sfe-black80: #e9ecef;
		--sfe-section-margin: 0 30px 30px 30px;
		font-family: 'Overpass';
		color: var(--sfe-black10);
	}

	:global(h1) {
		all: unset;
		display: block;
		font-size: 3rem;
		font-weight: 500;
		color: var(--sfe-black10);
	}

	:global(h2) {
		all: unset;
		display: block;
		font-size: 2rem;
		font-weight: 300;
		color: var(--sfe-black40);
		margin-bottom: 15px;
	}

	:global(h3) {
		all: unset;
		display: block;
		font-size: 1.7rem;
		font-weight: 300;
		color: var(--sfe-black20);
		margin-top: 50px;
		margin-bottom: 15px;
	}

	:global(p) {
		all: unset;
		display: block;
		color: var(--sfe-black30);
		font-weight: 200;
		font-size: 1.1rem;
		line-height: 1.3;
	}
</style>
