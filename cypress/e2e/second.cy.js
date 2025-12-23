/// <reference types="cypress" />
import 'cypress-file-upload';
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes("missing 'id' property")) {
    return false;
  }
});

const DISCORD_WEBHOOK =
  'https://discord.com/api/webhooks/0001438032906466496614/fqT5gHnTiFpdF5b4zeoGpcz2ThM0v5YPgxPg85s2HhQ81wIO8iuQjuD-X-U5eBr2fFxE';

const passedTests = [];

describe('REAL Trip Flow – single login', () => {

  // ─────────────── LOGIN WITH SESSION ───────────────
  before(() => {
    cy.session('aaisha-session', () => {
      cy.visit('https://tripharu.com/signin');

      cy.get('#username').type('aaisha', { delay: 100 });
      cy.get('#password').type('11111111', { delay: 100 });
      cy.get('button[type="submit"]').click();
    cy.wait(2000);

validate: () => {
        
        cy.visit('https://tripharu.com/');
      cy.url().should('include', '/');
    cy.wait(2000);

      cy.get('a[href="/trips/quick-create"]').should('be.visible');
}

    });
  });
passedTests.push('Login');
  // ─────────────── CREATE NEW TRIP ───────────────
  it('creates a new trip , edits trip, deletes it and logout ', () => {
    cy.visit('https://tripharu.com/trips/quick-create');


    cy.get('[placeholder="Search or type a destination"]').click({ force: true });
    cy.get('[placeholder="Search or type a destination"]').type('Annapurna Base Camp', { delay: 100 });

    
    cy.contains('Annapurna Base Camp (ABC), Nepal', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    
    cy.get('#date')
  .invoke('val', '2025-11-16')
  .trigger('input')
  .trigger('change');

    cy.wait(500);

   
    cy.get('button.btn.btn-primary.btn-md.min-w-\\[120px\\].w-36')
      .should('be.visible')
      .click({ force: true });

    
    cy.contains('label', 'Summer').click({ force: true });
    cy.contains('label', 'Rs 7,000 - Rs 8,000').click({ force: true });
    cy.contains('label', 'Intermediate').click({ force: true });
    cy.contains('label', '3 Days').click({ force: true });

    
    const items = ['Gloves', 'Power Bank', 'Warm Jacket', 'Trekking Pants'];
    items.forEach(item => {
      cy.contains('label', item).should('be.visible').click({ force: true });
    });
    cy.wait(2000);


    
    cy.get('button.btn.btn-primary.btn-md.min-w-\\[120px\\].w-36')
 .eq(1) 
      .should('be.visible')
      .click({ force: true });
  
cy.contains('Can you provide a day-by-day itinerary?', { timeout: 10000 })
      .should('be.visible');

cy.get('[placeholder="e.g. Pokhara to Pittam Deurali"]').first()
  .click()
  .type('Pokhara to Nayapul and Trek to Tikhedhunga/Chhomrong', { delay: 100 });


cy.get('button.btn.btn-outline').contains('Add Day').click({ force: true });


cy.get('[placeholder="e.g. Pokhara to Pittam Deurali"]').last()
  .click()
  .type('Trek from Chhomrong to Annapurna Base Camp (ABC)', { delay: 100 });


cy.get('button.btn.btn-outline').contains('Add Day').click({ force: true });


cy.get('[placeholder="e.g. Pokhara to Pittam Deurali"]').last()
  .click()
  .type('ABC to Chhomrong and Return to Pokhara', { delay: 100 });
 cy.get('button.btn.btn-primary.btn-md.min-w-\\[120px\\].w-36')
 .eq(1) 
      .should('be.visible')
      .click({ force: true });
      

cy.get('body > div > div.flex.min-h-screen.flex-col.bg-base-100 > main > div:nth-child(2) > div > div.relative > div.flex.items-center.justify-center.w-full > label', { timeout: 10000 })
  .scrollIntoView()
  .should('exist')
  .click({ force: true });


cy.wait(1000);


cy.get('input[type="file"]').should('exist').selectFile('cypress/fixtures/ann.webp', { force: true });
cy.get('#description').type('The 3-day Annapurna Base Camp (ABC) trek is a short yet breathtaking adventure that takes you from Pokhara to the heart of the Annapurna region.');
  
cy.get('#review').type('The 3-day Annapurna Base Camp trek was an incredible experience! Even in such a short time, the journey offered everything — from peaceful villages and lush green trails to the breathtaking panorama of the Annapurna range. Reaching the base camp felt surreal, surrounded by snow-capped peaks glowing in the morning sun. The itinerary was well-planned, perfectly balancing adventure and comfort. Highly recommend this trek to anyone looking for a short yet unforgettable Himalayan adventure!')
  cy.get('#personal_story').type('I still remember the excitement as we left Pokhara early in the morning, heading towards Nayapul. The trek to Tikhedhunga and Chhomrong was challenging but beautiful — every step through the terraced fields and forest trails felt like an adventure. Reaching Annapurna Base Camp on the second day was surreal; standing among the towering peaks of Annapurna I and Machhapuchhre, I felt both humbled and exhilarated. Watching the sunrise over the snow-capped mountains was a moment I’ll never forget. The journey back to Pokhara was filled with reflections on the incredible landscapes and the warmth of the villages we passed. Those three days were short, but the memories will last a lifetime.');
cy.get('#food_culture').type('The 3-day Annapurna Base Camp trek is not just about mountains — it’s also a journey through rich Himalayan culture. Along the trail from Tikhedhunga and Chhomrong to ABC, we experienced the warm hospitality of Gurung and Magar villages, learning about their traditions and daily life. Local teahouses offered delicious homemade meals like dal bhat, momo, and seasonal vegetables — simple yet hearty food that fueled our trek. Sharing stories with villagers and fellow trekkers over a hot meal made the experience even more memorable, giving a true taste of Nepalese culture alongside the breathtaking landscapes.');
cy.get('#tips').type('For a safe and enjoyable 3-day ABC trek, the best time to visit is during spring (March–May) or autumn (September–November), when the weather is clear and mountain views are spectacular. Pack layered clothing, sturdy trekking shoes, a backpack, water bottles, sunscreen, sunglasses, and a light sleeping bag for teahouse stays. Stay hydrated, enjoy local meals, and avoid untreated water by using a filter or purification tablets. Prepare physically with some cardio and leg-strengthening exercises, and remember to respect local culture by being polite, removing shoes when entering homes or temples, and asking before taking photos. Start early each day to avoid crowds, carry snacks, pace yourself, and take time to enjoy the stunning landscapes — these small tips can make your trek safe, smooth, and truly unforgettable.')
cy.get('#budget').type('For the 3-day ABC trek, the estimated cost per person ranges from 7,000 to 8,000 NPR. Transportation from Pokhara to Nayapul and back typically costs around 1,200–1,500 NPR. Accommodation in local teahouses for two nights is about 2,000–2,500 NPR, while food and drinks along the trek, including breakfast, lunch, dinner, and tea or coffee, can cost 2,500–3,000 NPR. Hiring a local guide or porter is optional and may add 1,500–2,000 NPR, which can be shared among a group. Miscellaneous expenses such as tips, entry permits, hot showers, or device charging usually amount to 500–1,000 NPR. This budget ensures a comfortable and enjoyable trekking experience.')
cy.get('input[placeholder="Enter a name for your trip"]')
  .should('be.visible')
  .type('3-Day Annapurna Base Camp Adventure', { delay: 100 });
cy.contains('button', 'Submit')
  .should('be.visible')
  .click({ force: true });
cy.wait(500);

passedTests.push('Created a New Post');

// ─────────────── EDIT THE CREATED TRIP ───────────────
cy.get('.avatar').should('be.visible').click({force:true});
cy.contains('My Profile').should('be.visible').click({force:true});
cy.contains('Trips by aaisha').should('be.visible');
cy.contains('3-Day Annapurna Base Camp Adventure')
    .scrollIntoView()
    .should('be.visible')
    .click({ force: true });
 cy.wait(500);
 cy.contains('Edit').should('be.visible').click({force:true});


cy.get('input[placeholder="Enter trip name"]')
  .clear()
  .type('My Brand New Trip Name 2026');
cy.wait(1000);
cy.get('input[type="date"]')
  .invoke('val', '2025-11-25')   
  .trigger('change')
  .trigger('input');
cy.contains('button', 'Update Basic Info').click();
cy.wait(500);
cy.contains('Basic updated successfully').should('be.visible');
cy.contains('Details').should('be.visible').click({force:true});
cy.wait(500);
 cy.get('textarea[placeholder="Describe your trip experience"]')
  .then(($el) => {
    const oldText = $el.val();
    const addition = '\n\nUpdated in December 2025: The sunrise from ABC with fresh snow is absolutely magical!';
    cy.get('textarea[placeholder="Describe your trip experience"]')
      .clear()
      .type(oldText + addition);
  });
  cy.contains('button', 'Update Details').click();
cy.wait(500);
  cy.contains("Trip-details").click();
cy.contains('label', 'Winter').click({ force: true });
const items1 = ['Raincoat', 'Trekking Backpack', 'Thermal Wear', 'Water Bottle'];
    items1.forEach(items1 => {
      cy.contains('label', items1).should('be.visible').click({ force: true });
    });
 passedTests.push('Edited the Created Post');   
cy.wait(500);
// ─────────────── DELETE THE CREATED TRIP ───────────────
    cy.wait(150)  
 
  cy.get('.avatar')
    .should('be.visible')
    .click({ force: true });

  cy.contains('My Profile', { timeout: 10000 })
    .should('be.visible')
    .click({ force: true });

  cy.contains('Trips by aaisha', { timeout: 15000 }).should('be.visible');
 cy.wait(500);

  cy.contains('My Brand New Trip Name 2026', { timeout: 15000 })
    .scrollIntoView()
    .should('be.visible')
    .click({ force: true });
 cy.wait(500);

  cy.contains('button', 'Delete', { timeout: 10000 })
    .should('be.visible')
    .click({ force: true });
 cy.wait(500);

  cy.contains('button', 'Yes, delete it!', { timeout: 100 })
    .should('be.visible')
    .click({ force: true });
  cy.wait(300);
  passedTests.push('Deleted the created post');
cy.wait(300);
// ─────────────── LOGOUT ───────────────

cy.get('.avatar').click({force: true})  
    cy.get('.dropdown-content a').contains('Logout').click({ force: true })
    cy.wait(500)  // Wait for logout redirect
cy.get('.swal2-popup', { timeout: 10000 }).should('be.visible')

     cy.wait(500);
    cy.get('button.swal2-confirm')
      .should('contain', 'Yes!')
      .click({ force: true })

    cy.wait(2000)
    passedTests.push('Logged out successfully');
    cy.url().should('include', '/signin')
    cy.get('#username').should('be.visible')
  }); 
  

// ─────────────── DISCORD NOTIFICATION ───────────────
  after(() => {
    if (!passedTests.length) return;

    const embed = {
      title: 'Successful Tests',
      description: passedTests.map(t => `* ${t}`).join('\n'),
      color: 0x00ff00,
      timestamp: new Date().toISOString(),
      footer: { text: 'tripharu.com' },
    };

    cy.request({
      method: 'POST',
      url: DISCORD_WEBHOOK,
      body: { embeds: [embed] },
      headers: { 'Content-Type': 'application/json' },
      failOnStatusCode: false,
    });
  });

});