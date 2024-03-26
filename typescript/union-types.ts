let options: number | string;
options = 1;
options = 'string'

const func = (params: number | string): void => {
    console.log(params);
}

func(1);
func('string')