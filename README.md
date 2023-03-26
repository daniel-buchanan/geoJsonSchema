# JSON Schema for RFC7946
[![Lint Schemas](https://github.com/daniel-buchanan/rfc7946-schema/actions/workflows/lint.yml/badge.svg)](https://github.com/daniel-buchanan/rfc7946-schema/actions/workflows/lint.yml)

This repository is intended to provide JSON Schema Files which are fully self referenced and contained.

It is based on work done by https://github.com/yagajs/geojson-schema but as a standalone reference for RFC7946.

## What is RFC7946?
[RFC7946](https://www.rfc-editor.org/rfc/rfc7946) is a standard which replaces [GeoJson](https://geojson.org).  

As per the Abstract of the RFC7946 document:
> GeoJSON is a geospatial data interchange format based on JavaScript
   Object Notation (JSON).  It defines several types of JSON objects and
   the manner in which they are combined to represent data about
   geographic features, their properties, and their spatial extents.
   GeoJSON uses a geographic coordinate reference system, World Geodetic
   System 1984, and units of decimal degrees.

So how does this help me?  

Well, having a standalone reference for this as JSON Schema means that you can:  
1. Validate JSON files against it
2. Generate code from the schema for a language of your choice (this was the main driver)
