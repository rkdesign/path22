from . import aperio, system, tcga
from .hui_resource import Path22Resource
from .image_browse_resource import ImageBrowseResource


def addEndpoints(apiRoot):
    """
    This adds endpoints from each module.

    :param apiRoot: Girder api root class.
    """
    system.addSystemEndpoints(apiRoot)
    apiRoot.tcga = tcga.TCGAResource()
    aperio.addItemEndpoints(apiRoot.item)
    aperio.addTcgaEndpoints(apiRoot.tcga)

    ImageBrowseResource(apiRoot)

    apiRoot.path22 = Path22Resource()
