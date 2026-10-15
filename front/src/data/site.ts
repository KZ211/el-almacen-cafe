// Datos del local. Todo lo marcado PENDIENTE es provisorio: confirmar con el cliente antes de publicar.
export const site = {
	name: 'El Almacén',
	tagline: 'Helados & Café',
	logo: '/logo-el-almacen.jpg',
	// Foto real del frente. Guardarla en public/frente.jpg y la sección "Bajo la pérgola" la muestra.
	storefrontPhoto: '/frente.jpg',

	// PENDIENTE: número real, con código de país (ej. https://wa.me/5493xxxxxxxxx).
	whatsappUrl: 'https://wa.me/',
	// PENDIENTE: link real de Google Maps.
	mapsUrl: 'https://maps.google.com',
	// PENDIENTE: dirección real.
	address: 'Dirección a confirmar',
	// PENDIENTE: PDF de la carta. Mientras sea null, la carta se pide por WhatsApp.
	menuPdf: null as string | null,

	// PENDIENTE: horarios reales. Formato 24 h; "24:00" significa medianoche.
	// Mientras confirmed sea false, la web muestra "Horario a confirmar" y no dice si está abierto.
	hours: { confirmed: false, opens: '10:00', closes: '24:00', days: 'Todos los días' },
	// Pasar a true cuando el cliente confirme la lista de gustos y los formatos.
	contentConfirmed: false,

	nav: [
		{ href: '#inicio', icon: 'casa', label: 'Inicio' },
		{ href: '#helados', icon: 'cucurucho', label: 'Helados' },
		{ href: '#cafe', icon: 'taza', label: 'Café' },
		{ href: '#gustos', icon: 'lista', label: 'Gustos' },
		{ href: '#visitanos', icon: 'pin', label: 'Visitanos' },
	],
};

// PENDIENTE: lista de ejemplo con clásicos de heladería; reemplazar por los gustos reales.
export const flavors = [
	'Dulce de leche',
	'Dulce de leche granizado',
	'Chocolate',
	'Chocolate amargo',
	'Frutilla a la crema',
	'Limón',
	'Sambayón',
	'Vainilla',
	'Menta granizada',
	'Banana split',
	'Crema americana',
	'Durazno',
];

// PENDIENTE: confirmar formatos y la oferta de cafetería con el cliente.
export const panes = [
	{
		id: 'helados',
		title: 'Helados',
		lead: 'Para llevar a casa o para comer caminando.',
		items: ['Cucurucho', 'Vasito', '¼ kg', '½ kg', '1 kg'],
	},
	{
		id: 'cafe',
		title: 'Café',
		lead: 'Para tomar acá, bajo la pérgola, o para llevar.',
		items: ['Espresso', 'Cortado', 'Café con leche', 'Lágrima', 'Para llevar'],
	},
];

export function whatsappLink(message: string) {
	return `${site.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
