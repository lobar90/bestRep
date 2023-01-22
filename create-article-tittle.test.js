const createTittleArticle=require ('./task/task.js');

describe('Start Testing',
    () =>{
        const testCases=[
            {
                article: 'Volvo released a new car with the following spec: V6 236HP. It will cost $22647 and going to be sold in New York only',
                len: 25,
                expected: 'Volvo released a new…'
            },
            {
                article: '234 6789',
                len: 10,
                expected: '234 6789'
            },
            {
                article: '234 6789',
                len: 9,
                expected: '234…'
            },
            {
                article: '23456789',
                len: 10,
                expected: '23456789'
            },
            {
                article: '2345678 1234',
                len: 10,
                expected: '2345678…'
            },
            {
                article: '23456789 1234',
                len: 10,
                expected: '…'
            },
        ]
        testCases.forEach(test=>{
            it (
               `Article : ${test.article}, len : ${test.len}, expected : ${test.expected}`,
                ()=> {
                   const res=createTittleArticle(test.article, test.len)
                    expect(res).toBe(test.expected)
                }
            )
        })
});