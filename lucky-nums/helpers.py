

def serialize(year, number):
    return {
        'year': year,
        'number': number
    }

def data_to_dict(data):
    result = {}
    error = {}
    colors = ['red', 'green', 'blue', 'orange',]

    data_missing = False

    for key, value in data.items():
        
        if value == '' or data['color'] not in colors:
            data_missing = True
            if value not in colors and key == 'color': 
                error[f'{key}-err'] = f'{key} shud be red, green, blue or orange'
            elif value == '':
                error[f'{key}-err'] = f"{key} value is missing from requierd data"
            else:
                error[key] = value
        else:
            result[key] = value

    if data_missing:
        return {'error': error}
    else:
        return result