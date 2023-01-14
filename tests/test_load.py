import pytest
from girder.plugin import loadedPlugins


@pytest.mark.plugin('path22')
def test_import(server):
    assert 'path22' in loadedPlugins()
