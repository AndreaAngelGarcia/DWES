import test from 'ava';
import dateCompare from "../src/dateCompare.js";

test("10/08/2022 > 11/08/2022", t =>{
    const result = dateCompare("10/08/2022", "11/08/2022");
    t.deepEqual(result, { startDate: '10/08/2022', endDate: '11/08/2022' });
});