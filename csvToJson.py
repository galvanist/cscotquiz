import csv
import json

def csvToJson( inFile, outFile ):
    out = None

    with open( inFile, 'rU') as csvFile:
        #Note this reads the first line as the keys we can add specific keys with:
        #csv.DictReader( csvFile, fieldnames=<LIST HERE>, restkey=None, restval=None, )
        csvDict = csv.DictReader( csvFile, restkey=None, restval=None, delimiter=',', dialect='excel' )
        out = [obj for obj in csvDict]

    if out:
        with open( outFile, 'w' ) as jsonFile:
            json.dump( out, jsonFile, ensure_ascii=False, indent=2 )
    else:
       print "Error creating csv dict!"

if __name__ == "__main__":
     import argparse

     parser = argparse.ArgumentParser()
     parser.add_argument('inFile', nargs=1, help="Location of CSV input file")
     parser.add_argument('outFile', nargs=1, help="Location of JSON output file")
     args = parser.parse_args()
     csvToJson( args.inFile[0], args.outFile[0] )
