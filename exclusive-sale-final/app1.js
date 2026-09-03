  const app = document.getElementById('app');
  const route = window.location.pathname.replace(/\/+$/, '') || '/';
  const qs = new URLSearchParams(window.location.search);
  const arrow = '→';

  const icons = {
    lock: '<svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></svg>',
    chart: '<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V5M16 20v-8M2 20h20M4 8l6-5 6 6 5-4"/></svg>',
    target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="m16 8 5-5M17 3h4v4"/></svg>',
    flex: '<svg viewBox="0 0 24 24"><path d="M7 7h10v10H7zM7 3v4H3M17 21v-4h4M3 17h4v4M21 7h-4V3"/></svg>',
    person: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 4-7 8-7s7 2 8 7"/></svg>',
    rocket: '<svg viewBox="0 0 24 24"><path d="M14 5c3-2 5-2 7-2 0 2 0 4-2 7l-5 5-5-5zM8 11l-4 1-2 3 6 1M13 16l-1 5 3-2 1-4M8 17l-1 4-4 1 1-4z"/></svg>',
    shield: '<svg viewBox="0 0 24 24"><path d="M12 3 4 6v6c0 5 3 8 8 10 5-2 8-5 8-10V6z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>',
    key: '<svg viewBox="0 0 24 24"><circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M16 5l3 3M14 7l3 3"/></svg>',
    handshake: '<svg viewBox="0 0 24 24"><path d="m3 9 4-4 5 2 5-2 4 4-7 7-3-1-2 2-2-2-2 1-2-2zM8 8l4 4 3-2"/></svg>'
  };

  const verticals = [
    'Remedial & sports massage','Reflexology','Acupuncture','Nutritional therapy','Hypnotherapy',
    'Foot health & podiatry','Shiatsu','Craniosacral therapy','Bowen therapy','Manual lymphatic drainage'
  ];

  const buyers = {
    'pib-balens': {
      name: 'PIB Group / Balens',
      title: 'Turn a specialist-practitioner insurance audience into a multi-vertical transaction network.',
      copy: 'Balens already serves professionals across relevant health and wellbeing disciplines. Club Platform can add customer acquisition, booking, payment and recurring platform economics around an audience the group already understands.',
      points: ['Selected complementary-therapy vertical rights','Insurance-attestation and expiry workflows','Professional-body confirmation routes','Ongoing core licence and transaction economics'],
      structure: 'Three-to-five vertical portfolio rights with implementation support, buyer-funded operations and an ongoing core licence.'
    },
    'vtct-itec': {
      name: 'VTCT Skills / ITEC',
      title: 'Give qualified therapists a direct route from certification to a sustainable independent practice.',
      copy: 'The opportunity connects qualification, professional eligibility and insurance pathways with profiles, demand, booking, treatment funding and payments.',
      points: ['Graduate practice-launch network','Training-centre outcome reporting','Low-friction practitioner onboarding','Multi-modality deployment from one core'],
      structure: 'A paid graduate-network pilot followed by a national multi-modality licence.'
    },
    'gateway-workshops': {
      name: 'Gateway Workshops',
      title: 'Convert a national learner and practitioner audience into a commercial practice-launch network.',
      copy: 'The platform can help graduates establish profiles, access customer demand and transact without Gateway commissioning the full infrastructure from scratch.',
      points: ['Graduate profiles and onboarding','Massage and treatment verticals','Demand capture and booking pathway','Commercial participation in platform activity'],
      structure: 'A single-vertical or small-portfolio licence with a paid launch option.'
    },
    'westfield-health': {
      name: 'Westfield Health',
      title: 'Create a verified treatment-access network around services relevant to members and employers.',
      copy: 'Club Platform can support provider eligibility, discovery, booking and transaction evidence while preserving strict boundaries around clinical information.',
      points: ['Verified provider network','Member and employer access journeys','Booking and receipt infrastructure','Buyer-specific utilisation model'],
      structure: 'A paid feasibility pilot followed by an enterprise provider-network deployment.'
    },
    'bodyset': {
      name: 'Bodyset',
      title: 'Extend an established clinic operation into a wider independent-practitioner marketplace.',
      copy: 'Club Platform can support a broader branded network, customer demand and treatment funding without replacing existing clinic systems on day one.',
      points: ['National treatment-demand layer','Independent provider extension','Care Balance and course funding','Central service and commercial controls'],
      structure: 'One strategic vertical licence with integration and national rollout options.'
    },
    'lathams': {
      name: "Latham's Security Doorsets",
      title: 'Acquire years of high-intent steel-door search infrastructure and convert it through an established national operation.',
      copy: 'The network is most valuable to an operator with a broad product range, a functioning quote desk and the capacity to fulfil national demand.',
      points: ['83-site asset schedule','More than 80 regional markets','Historic enquiry and turnover evidence','Acquisition, licence or paid option'],
      structure: 'A paid diligence option followed by full acquisition or a time-bound exclusive operating licence.'
    }
  };
