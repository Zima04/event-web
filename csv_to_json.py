import json_flatten
import json
import pandas as pd
import chardet
import os

INPUT_FILE_PATH = os.path.join('src', 'assets', 'i18n', 'strings.csv')


def detectEncoding(filename):
    with open(filename, 'rb') as f:
        result = chardet.detect(f.read())
        return result['encoding']


def writeToJson(filepath, data):
    with open(filepath, 'w', encoding="utf8") as outfile:
        json.dump(data, outfile, ensure_ascii=False, indent=4)


def createFilePath(name):
    if ".json" not in name:
        name += ".json"
    filename = os.path.join('src', 'assets', 'i18n', name)
    return filename


def main():
    encoding = detectEncoding(INPUT_FILE_PATH)
    res_dict = pd.read_csv(INPUT_FILE_PATH, sep=',', index_col=0,
                           encoding=encoding, keep_default_na=False, na_filter=False).to_dict()
    for i in range(0, len(res_dict)):
        filename = list(res_dict.keys())[i]
        data = json_flatten.unflatten(list(res_dict.values())[i])
        writeToJson(createFilePath(filename), data)


main()
