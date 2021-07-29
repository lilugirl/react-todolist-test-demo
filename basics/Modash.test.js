import Modash from './Modash'
describe('Modash', () => {
    describe('`truncate()`',()=>{
        const string='there was one catch, and that was CATCH-22'
        it('truncates a string', () => {
            expect(Modash.truncate(string,19)).toEqual('there was one catch...')
        });
        it('no-ops if <=length',()=>{
            expect(Modash.truncate(string,string.length)).toEqual(string)
        });
        
    });

    describe('capitalize()',()=>{
        it('capitalizes firest letter,lowercase rest',()=>{
            const string='there was one catch, and that was CATCH-22';
            expect(Modash.capitalize(string)).toEqual('There was one catch, and that was catch-22')
        })
    })

    describe('cameCase()',()=>{
        it('camelizes string with spaces',()=>{
            const string='customer responsed at';
            expect(Modash.camelCase(string)).toEqual('customerResponsedAt')
        });

        it('camelizes string with underscores',()=>{
            const string='customer_responsed_at';
            expect(Modash.camelCase(string)).toEqual('customerResponsedAt')
        })
    })

    
   
  });
  